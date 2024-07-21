const createFactory = (elementModel) => async (req, res) => {
  console.log("create all factory for", elementModel);
  try {
    const elementDetail = req.body;
    const isEmpty = Object.keys(elementDetail).length === 0;
    if (isEmpty) {
      res.status(400).json({
        status: 400,
        message: "Body cannot be empty",
      });
    } else {
      console.log("new data", elementDetail);
      const data = await elementModel.create(elementDetail);
      res.status(201).json({
        status: 201,
        message: "data created Successfully!",
        data: data,
      });

      
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

const getFactory = (elementModel) => async (req, res) => {
  console.log("get all factory for", elementModel);
  try {
    const data = await elementModel.find();
    if (data.length === 0) {
      throw new Error("data not found");
    } else {
      res.status(200).json({
        status: 200,
        message: "Data found",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

const getFactoryById = (elementModel) => async (req, res) => {
  try {
    const { id } = req.params;
    const data = await elementModel.findById(id);
    if (!data) {
      throw new Error("data not found");
    }
    res.status(200).json({
      status: 200,
      message: "data found",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

const updateFactoryById = (elementModel) => async (req, res) => {
  try {
    console.log("request params", req.params);
    const { id } = req.params;
    const data = req.body;
    console.log("dataId", id);
    const updatedData = await elementModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    console.log("updated data", updatedData);
    if (!updatedData) {
      throw new Error("data not found");
    } else {
      res.status(200).json({
        status: 200,
        message: "data updated successfully",
        data: updatedData,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

const deleteFactoryById = (elementModel) => async (req, res) => {
  try {
    const { id } = req.params;
    const deletedData = await elementModel.findByIdAndDelete(id);
    if (!deletedData) {
      throw new Error("Data not found");
    } else {
      res.status(200).json({
        status: 200,
        message: "Data deleted successfully",
        data: deletedData,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

//check the imputs before create data
const checkInput = function (req, res) {
  console.log("req method", req.method);
  const data = req.body;
  const isEmpty = Object.keys(data).length === 0;
  if (isEmpty) {
    res.status(400).json({
      status: 400,
      message: "Body cannot be empty",
    });
  } else {
    next();
  }
};

//search based on request parameters
const searchFactoryByParams = (elementModel) => async (req, res) => {
  try {
    const sortQuery = req.query.sort;
    const selectQuery = req.query.select;

    //sorting logic
    let queryResPromise = elementModel.find();
    if (sortQuery) {
      const [sortParam, order] = sortQuery.split(" ");
      console.log("sort param ->", sortParam);
      console.log("order ->", order);

      if (order === "asc") {
        console.log("order is", order);
        queryResPromise = queryResPromise.sort(sortParam);
      } else {
        queryResPromise = queryResPromise.sort(`-${sortParam}`);
      }
    }

    //selecting
    if (selectQuery) {
      queryResPromise = queryResPromise.select(selectQuery);
    }

    //pagination
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const skip = (page - 1) * limit;
    console.log("skip", skip);

    /**Filter  */
    const filterQuery = req.query.filter;

    if (filterQuery) {
      console.log("filter query", filterQuery);
      queryResPromise = queryResPromise.find(filterQuery);
    }

    queryResPromise = queryResPromise.skip(skip).limit(limit);

    const result = await queryResPromise;

    res.status(200).json({
      message: "Search successfull!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
      error: err.message,
    });
  }
};

module.exports = {
  createFactory,
  getFactory,
  getFactoryById,
  updateFactoryById,
  deleteFactoryById,
  checkInput,
  searchFactoryByParams,
};
