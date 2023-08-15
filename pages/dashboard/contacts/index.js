import DHeader from "@/components/Dashboard/DHeader";
import Head from "next/head";
import { useEffect, useState } from "react";
import slugify from "slugify";
import Image from "next/image";
// import leftmenu
import LeftMenu from "@/components/Dashboard/LeftMenu";
import RichText from "@/components/RitchText/RichText";
import useSweetAlert from "@/components/lib/sweetalert2";
import { API_TOKEN, API_URL } from "@/config/index";
import { useRef } from "react";
import DataTable from "react-data-table-component";

// import tailwind modal
import { Button, Card, CardBody, Chip, Input } from "@material-tailwind/react";

// imports react pdf
import { StyleSheet } from "@react-pdf/renderer";

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
    basePrice: "",
  };

  const [product, setProduct] = useState(inital);

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
  // loeadinit members
  const [products, setProducts] = useState([]);
  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch data from an external API or database
  useEffect(() => {
    fetch(`${API_URL}/api/contacts?populate=*`, {
      method: "GET",
      headers: {
        Authorization: API_TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data);
        setFilteredProducts(data?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const result = products?.filter((product) =>
      product.attributes.Title.toLowerCase().match(search.toLowerCase())
    );
    setFilteredProducts(result);
  }, [search]);

  // table columns
  const columns = [
    {
      name: "Name",
      selector: (row) => row.attributes.name,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.attributes.email,
      sortable: true,
    },
    {
      name: "Message",
      selector: (row) => row.attributes.message,
      sortable: true,
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

  const handleDelete = (row) => {
    showAlert({
      title: "Do you want to Delete?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Yes",
      // denyButtonText: `Don't save`,
    }).then(async (result) => {
      if (!result?.isConfirmed) return;

      const res = await fetch(`${API_URL}/api/contacts/${row?.id}`, {
        method: "DELETE",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) return;

      showAlert({
        icon: "success",
        title: "Status Successfully Deleted!",
        showConfirmButton: false,
        timer: 1000,
      });
    });
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
          <div className=" mr-10  2xl:col-span-2  2xl:order-2">
            <DataTable
              columns={columns}
              data={filteredProducts}
              // selectableRowsHighlight
              // highlightOnHover
              // selectableRows
              fixedHeader
              title="Contacts"
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
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
