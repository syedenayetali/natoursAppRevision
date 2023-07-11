exports.getTestCall = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: { message: "Success Call" },
  });
};

exports.postTestCall = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: req.body,
  });
};

exports.getTestCallID = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      id: req.params.id,
    },
  });
};

exports.patchTestCallID = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      id: req.params.id,
    },
  });
};

exports.deleteTestCallID = (req, res) => {
  res.status(200).json({
    status: "Success",
    data: {
      id: req.params.id,
    },
  });
};
