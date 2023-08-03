export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const strapiRes = await fetch(
      `https://printandgraph-backend.onrender.com/api/admins`
    );
    const data = await strapiRes.json();

    if (strapiRes.ok) {
      if (
        data.data[0].attributes.Email === email &&
        data.data[0].attributes.Password === password
      ) {
        res.status(200).json({ email });
      }
    } else {
      res.status(404).json({ message: "user not found!" });
    }
  }
};
