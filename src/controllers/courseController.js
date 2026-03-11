import Course from "../models/courseModel.js";

export const createCourse = async (req, res) => {
    const image = req?.file?req.file.filename|| null: null
    // console.log(req.body)
    // console.log(req.file)
    const { title, description, price, level, date, demoVideo } = req.body;
    try {
        const course = await Course.create({
            title,description, price, level, image,date,demoVideo
        });
        res.status(200).json({
            status: 200,
            success: true,
            message: "Course Created Successfully!",
            course,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Internal Server Error!",
            error,
        });
    }
};

export const getCourse = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json({
            status: 200,
            success: true,
            message: "Courses Found Successfully!",
            courses,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Internal Server Error!",
            error,
        });
    }
};


export const updateCourse = async (req, res) => {
  try {

    const updateData = {
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      level: req.body.level,
      date: req.body.date,
      demoVideo: req.body.demoVideo
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Course Updated Successfully!",
      course
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error
    });
  }
};



export const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 200,
            success: true,
            message: "Course Deleted Successfully!",
            course,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Internal Server Error!",
            error,
        });
    }
};
