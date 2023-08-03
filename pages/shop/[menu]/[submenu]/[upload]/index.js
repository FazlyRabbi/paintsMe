import Layout from "@/components/Layout";
import Uploads from "@/components/Uploads/Uploads";
import useProtectedRoute from "Hooks/useProtectedRoute";

function uploads() {

  useProtectedRoute();

  return (
    <Layout title={"uploads"}>
      <Uploads />
    </Layout>
  );
}

export default uploads;
