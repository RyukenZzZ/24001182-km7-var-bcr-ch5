const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Fetch all manufactures
exports.getManufactures = async () => {
  return await prisma.manufactures.findMany();
};

// Fetch manufacture by ID
exports.getManufactureById = async (id) => {
  return await prisma.manufactures.findUnique({
    where: { id },
  });
};

// Create a new manufacture
exports.createManufacture = async (data) => {
  return await prisma.manufactures.create({
    data,
  });
};

// Update manufacture by ID
exports.updateManufacture = async (id, data) => {
  return await prisma.manufactures.update({
    where: { id },
    data,
  });
};

// Delete manufacture by ID
exports.deleteManufactureById = async (id) => {
  return await prisma.manufactures.delete({
    where: { id },
  });
};
