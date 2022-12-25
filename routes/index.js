const router = require("express").Router();
const Task = require("../models/Task");

router.get("/all", async (req, res) => {
  const allTasks = await Task.find();
  try {
    res.status(200).json({
      success: true,
      allTasks,
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/complated", async (req, res) => {
  const allTasks = await Task.find({ complated: true });
  res.status(200).json({
    success: true,
    allTasks,
  });
});

router.get("/active", async (req, res) => {
  const allTasks = await Task.find({ complated: false });
  res.status(200).json({
    success: true,
    allTasks,
  });
});

router.post("/", async (req, res) => {
  const { title, complated } = req.body;
  const task = new Task({ title, complated });

  try {
    await task.save().then(() => console.log("saved!"));
    res.status(200).json({
      success: true,
      message: "saved!",
    });
  } catch (e) {
    console.log(e);
  }
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndUpdate(
      { _id: id },
      {
        title: req.body.title,
      }
    );
    res.status(200).json({
      success: true,
      message: "saved!",
    });
  } catch (e) {
    console.log(e);
  }
});

router.put("/update/complated/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndUpdate(
      { _id: id },
      {
        complated: req.body.complated,
      }
    );
    res.status(200).json({
      success: true,
      message: "updated the task status!",
    });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "deleted!",
    });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/", async (req, res) => {
  try {
    await Task.deleteMany({ complated: true });
    res.status(200).json({
      success: true,
      message: "Deleted The Complated Tasks!",
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
