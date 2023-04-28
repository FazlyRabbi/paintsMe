import Image from "next/image";
import Link from "next/link";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function SingleProduct({ details }) {
  const removeHtml = () => {
    const str = details?.attributes.Description.toString();
    return str.replace(/<[^>]*>/g, "");
  };

  return (
    <section className="product  cursor-pointer  ">
      <Card className="max-w-[25rem] overflow-hidden rounded-md">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          {details && (
            <Image
              src={`${
                details.attributes.Thubmnails_1.data.attributes.url &&
                `${details.attributes.Thubmnails_1.data.attributes.url}`
              }`}
              width={400}
              height={400}
              alt="ui/ux review check"
            />
          )}
        </CardHeader>
        <CardBody>
          <Typography variant="h1" color="blue-gray">
            {details?.attributes.Title}
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="mt-3 font-normal"
          >
            {`${removeHtml().slice(0, 30)}.....`}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center !py-0 mb-4  justify-between">
          <Link
            href={`/shop/${details?.attributes.Cetegory.toLowerCase()}/${
              details?.attributes.Slug
            }`}
          >
            <Button variant="gradient" size="sm">
              Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
