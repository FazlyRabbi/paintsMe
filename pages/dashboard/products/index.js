import DHeader from "@/components/Dashboard/DHeader";
import Head from "next/head";
import { useEffect, useState } from "react";
import slugify from "slugify";
// import leftmenu
import LeftMenu from "@/components/Dashboard/LeftMenu";
import useSweetAlert from "@/components/lib/sweetalert2";
import { API_TOKEN, API_URL } from "@/config/index";
import DataTable from "react-data-table-component";
import { TiDeleteOutline } from "react-icons/ti";

// import tailwind modal
import {
  Button,
  Card,
  CardBody,
  Chip,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";

// imports react pdf
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// style sheet for pdf
const styles = StyleSheet.create({
  doc: {
    color: "#404B50",
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginVertical: "20px",
  },
  label: {
    fontSize: "12px",
    marginBottom: "6px",
  },
  input: {
    fontSize: "13px",
    color: "#000",
  },
});

function index() {
  const inital = {
    Title: "",
    Description: "",
    Cetegory: "",
    Slug: "",
  };

  const [product, setProduct] = useState(inital);
  const [thubmnail, setThubmnail] = useState(null);

  // generate slug
  const genrerateSlug = (string) => {
    const slug = slugify(string, {
      lower: true, // Convert to lowercase
      remove: /[*+~.()'"!:@]/g, // Remove special characters
    });
    setProduct({ ...product, Slug: slug });
  };

  useEffect(() => {
    genrerateSlug(product.Title);
  }, [product?.Title]);

  // showing alert
  const { showAlert } = useSweetAlert();

  const [isFatching, setIsFatching] = useState(false);

  // loead init members
  const [orders, setOrders] = useState([]);
  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filteredOrder, setFilteredOrder] = useState([]);
  //  set single Data
  const [singleData, setSingleData] = useState("");

  const [open, setOpen] = useState(false);

  // membershiip pdf
  const MembersPdf = () => (
    <Document>
      <Page size={"A4"} style={styles.doc}>
        <Text style={styles.header} fixed>
          {singleData.FirstName && singleData.FirstName}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            flexWrap: "wrap",
            paddingHorizontal: 20,
            marginTop: "20px",
          }}
        >
          <View>
            <Text style={styles.label} fixed>
              Title
            </Text>
            <Text style={styles.input} fixed>
              {singleData.Title && singleData.Title}
            </Text>
          </View>

          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              LastName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.LastName && singleData.LastName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              MiddleName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.MiddleName && singleData.MiddleName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FamilyLastName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FamilyLastName && singleData.FamilyLastName}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50,
            flexWrap: "wrap",
            paddingHorizontal: 20,
            marginTop: "20px",
          }}
        >
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
          <View>
            <Text style={styles.label} fixed>
              FirstName
            </Text>
            <Text style={styles.input} fixed>
              {singleData.FirstName && singleData.FirstName}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  const handleOpen = () => {
    console.log("hello");
  };

  // csv headers
  const headers = [
    { label: "ID", key: "id" },
    { label: "Title", key: "attributes.Title" },
    { label: "Country", key: "attributes.Country" },
    { label: "Slug", key: "attributes.Slug" },
    { label: "ProjectDescription", key: "attributes.ProjectDescription" },
    { label: "KushInvolment", key: "attributes.KushInvolment" },
    { label: "RegistrationId", key: "attributes.RegistrationId" },
    { label: "ProjectCategorie", key: "attributes.ProjectCategorie" },
    { label: "Bradcamp", key: "attributes.Bradcamp" },
    { label: "Name", key: "attributes.Replay.Name" },
    { label: "Email", key: "attributes.Replay.Email" },
    { label: "Phone", key: "attributes.Replay.Phone" },
  ];

  // Fetch data from an external API or database
  useEffect(() => {
    fetch(
      `${API_URL}/api/orders?populate[products][populate]=*&populate[Shipping][populate]=*&populate[Billing][populate]=*&populate[orderInfo][populate]=*`,
      {
        method: "GET",
        headers: {
          Authorization: API_TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data?.data);
        setFilteredOrder(data?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const result = orders?.filter((order) =>
      order.attributes.Billing.firstName
        .toLowerCase()
        .match(search.toLowerCase())
    );
    setFilteredOrder(result);
  }, [search]);

  // table columns
  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.attributes.orderInfo.orderId,
      sortable: true,
    },
    {
      name: "Customer",
      selector: (row) => row.attributes.Billing.firstName,
      sortable: true,
    },
    {
      name: "Product Details",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Chip
            value="Show"
            color="green"
            className=" cursor-pointer  lowercase "
            onClick={() => handleShowProduct(row.attributes)}
          />
        </div>
      ),
    },
    {
      name: "Delevary Price",
      selector: (row) => `${row.attributes.orderInfo.price}$`,
      sortable: true,
    },
    {
      name: "Files",
      cell: (row) => (
        <Chip
          className=" cursor-pointer"
          value="Show"
          onClick={() => {
            dwonloadFile(row);
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
            </svg>
          }
        ></Chip>
      ),
    },
    // {
    //   name: "Client Secret",
    //   selector: (row) => row.attributes.orderInfo.paymentInfo,

    // },
    {
      name: "Actions",
      cell: (row) => (
        <select
          required
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          onChange={(status) => handleStatus(status.target.value, row)}
        >
          <option defaultChecked>Meaking</option>
          <option>On Way</option>
          <option>Shipped</option>
        </select>
      ),
      selector: "selected",
      sortable: false,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div className=" grid my-2 justify-between items-center xl:grid-cols-3 grid-cols-1 gap-2">
          <Chip
            color="red"
            value="Delete"
            className=" cursor-pointer  lowercase "
            onClick={() => handleDelete(row)}
          />
        </div>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#fff",
        fontSize: "14px",
        color: "#333",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#F9FAFB",
        boxShadow: "none",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#374151",
        textTransform: "uppercase",
      },
    },
  };

  const formData = typeof window !== "undefined" ? new FormData() : "";

  useEffect(() => {
    if (!thubmnail) return;

    Object.keys(thubmnail).forEach((property) => {
      formData.append(
        `files.Thubmnails`,
        thubmnail[property],
        thubmnail[property].name
      );
    });
  }, [thubmnail]);

  // const { showAlert } = useSweetAlert();

  // const addProjects = async () => {
  //   try {
  //     setIsFatching(true);
  //     const res = await fetch(`${API_URL}/api/projects`, {
  //       method: "POST",
  //       headers: {
  //         Authorization: API_TOKEN,
  //       },

  //       body: formData,
  //     });

  //     const data = await res.json();
  //     if (!res.ok) return;
  //     showAlerts();
  //     setIsFatching(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("data", JSON.stringify(product));

    const res = await fetch(`${API_URL}/api/products`, {
      method: "POST",
      headers: {
        Authorization: API_TOKEN,
      },

      body: formData,
    });

    const data = await res.json();

    console.log(data);
  };

  // show products

  const [showProduct, setShowProduct] = useState(false);

  const handleShowProduct = (data) => {
    setSingleData(data);
    setShowProduct(true);
  };

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>

      <Head>
        <title>Project</title>
      </Head>
      <div className="grid  px-10 grid-cols-1 lg:grid-cols-5 gap-6 justify-items-left p-[3rem] ">
        <LeftMenu />
        <DHeader />

        <div className=" grid grid-cols-1 mt-[6rem] 2xl:grid-cols-3 gap-y-2 gap-2 lg:col-span-4 gap-x-5">
          <div className="project__form mt-[2rem] 2xl:order-1  order-2">
            <Card className="w-full 2xl:w-96">
              <h4 className=" text-center font-bold  text-[1.5rem] uppercase">
                Add Products
              </h4>

              <form onSubmit={handleSubmit}>
                <CardBody className="text-center gap-6  grid grid-cols-1">
                  <Input
                    required
                    label="Title"
                    disabled={isFatching}
                    value={product.Title}
                    onChange={(e) =>
                      setProduct({ ...product, Title: e.target.value })
                    }
                  />

                  <div>
                    <p className=" text-left font-bold mb-3">Thubmnail</p>
                    <input
                      required
                      disabled={isFatching}
                      name="files[]"
                      multiple
                      accept="image/*"
                      type="file"
                      placeholder="Image"
                      className="flex justify-start"
                      onChange={(e) => setThubmnail(e.target.files)}
                    />
                  </div>

                  <div>
                    <p
                      htmlFor="my-textarea"
                      className="text-left font-bold mb-3"
                    >
                      Description
                    </p>
                    <textarea
                      required
                      id="my-textarea"
                      disabled={isFatching}
                      name="message"
                      rows="3"
                      cols="20"
                      className="w-full border p-2 border-softGray rounded-md"
                      value={product.Description}
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          Description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <Input
                    required
                    disabled={isFatching}
                    label="Categorie"
                    value={product.Cetegory}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        Cetegory: e.target.value,
                      })
                    }
                  />

                  <Input
                    required
                    disabled={isFatching}
                    label="Slug"
                    value={product?.Slug}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        Slug: e.target.value,
                      })
                    }
                  />

                  <Button type="submit" size="md" disabled={isFatching}>
                    {isFatching ? (
                      <span className=" animate-ping">loading..</span>
                    ) : (
                      `   Add Product`
                    )}
                  </Button>
                </CardBody>
              </form>
            </Card>
          </div>

          <div className=" mr-10  2xl:col-span-2  2xl:order-2">
            <DataTable
              columns={columns}
              data={filteredOrder}
              // selectableRowsHighlight
              // highlightOnHover
              // selectableRows
              fixedHeader
              title="Project Table"
              subHeader
              subHeaderComponent={
                <div className="relative mb-6 mt-4  shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-[#6B7280] dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="   bg-[#F9FAFB] border  border-softGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              }
              customStyles={customStyles}
              subHeaderAlign="center"
              pagination
              // actions={
              //   // <div className="flex justify-between mb-4 items-center space-x-2">
              //   //   <CSVLink
              //   //     data={projects}
              //   //     headers={headers}
              //   //     filename={"Invest-data.csv"}
              //   //   >
              //   //     <Chip
              //   //       value="Download"
              //   //       className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
              //   //     />
              //   //   </CSVLink>

              //   //   <CSVLink
              //   //     data={projects}
              //   //     headers={headers}
              //   //     filename={"Volunteers-data.csv"}
              //   //   >
              //   //     <Chip
              //   //       color="amber"
              //   //       value=" Download CSV"
              //   //       className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
              //   //     />
              //   //   </CSVLink>

              //   //   <Chip
              //   //     color="indigo"
              //   //     value="Pdf"
              //   //     className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
              //   //   />

              //   //   <Chip
              //   //     color="purple"
              //   //     value="Share"
              //   //     className=" cursor-pointer   capitalize shadow-md active:shadow-sm text-base  "
              //   //   />
              //   // </div>
              // }
            />
          </div>
        </div>

        {/* // tailwind modal  */}

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader className="  flex justify-between">
            {" "}
            <p className="text-[1.3rem]">
              {singleData.FirstName && singleData.FirstName}
            </p>
            <TiDeleteOutline
              className=" text-[1.5rem] cursor-pointer"
              onClick={handleOpen}
            />
          </DialogHeader>

          <DialogBody>
            <div
              className="grid grid-cols-1 max-h-[80vh]   
            overflow-y-auto 
            xl:grid-cols-2
            
            2xl:overflow-visible  gap-5 2xl:grid-cols-3
          "
            >
              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Title
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Title && singleData.Title}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Country
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.Country && singleData.Country}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  Country
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.KushInvolment && singleData.KushInvolment}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  KushInvolment
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={singleData.KushInvolment && singleData.KushInvolment}
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  ProjectCategorie
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={
                    singleData.ProjectCategorie && singleData.ProjectCategorie
                  }
                  disabled
                />
              </div>

              <div className="mr-2 lg:mr-0">
                <label htmlFor="FirstName" className="text-black">
                  ProjectDescription
                </label>
                <Input
                  name="FirstName"
                  className="pt-1"
                  label={
                    singleData.ProjectDescription &&
                    singleData.ProjectDescription
                  }
                  disabled
                />
              </div>
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </>
  );
}

export default index;
