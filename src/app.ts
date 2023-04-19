import { user } from "./config.js";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  const snapshot = await user.get();
    const docs = snapshot.docs.map((doc) => doc.data());
    res.send(docs);
});

app.post("/create", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const doc = await user.add({ name, email });
  res.send(doc.id);
});

app.post("/update", async (req: Request, res: Response) => {
  const { id, name, email } = req.body;
  await user.doc(id).update({ name, email });
  res.send("updated");
});
app.post("/delete", async (req: Request, res: Response) => {
  const { id } = req.body;
  await user.doc(id).delete();
  res.send("deleted");
});


app.listen(3000, () => {
    console.log("Yoo server started");
    }
);
