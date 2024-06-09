const namespaceModel = require("./../models/Chat");

exports.getAll = async (req, res, next) => {
  try {
    const nameSpace = await namespaceModel.find({});
    return res.json(nameSpace);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, href } = req.body;

    const namespase = await namespaceModel.findOne({
      $or: [{ title }, { href }],
    });
    if (namespase) {
      return res.status(400).json({
        message: "nameSpases It has already been built with this specification",
      });
    }

    await namespaceModel.create({ href, title });
    return res.status(201).json({ message: "NameSpace Created successfully" });
  } catch (err) {
    next(err);
  }
};

exports.createRoom = async (req, res, next) => {
  try {
    const { title, namespace } = req.body;

    const namespase = await namespaceModel.findOne({
      href: namespace,
    });
    if (!namespase) {
      return res.status(400).json({
        message: "NameSpases not Found",
      });
    }

    const mainRoom = await namespaceModel.findOne({ "rooms.title": title });
    if (mainRoom) {
      return res.status(400).json({
        message: "Romms has Already Exists",
      });
    }

    const room = { title, image: "Test image" };

    await namespaceModel.findOneAndUpdate(
      { href: namespace },
      {
        $push: { rooms: room },
      }
    );
    return res.status(201).json({ message: "Rooms Created successfully" });
  } catch (err) {
    next(err);
  }
};
