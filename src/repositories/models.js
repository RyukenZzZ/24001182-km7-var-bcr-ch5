const { PrismaClient } = require("@prisma/client");
const JSONBigInt = require("json-bigint");

const prisma = new PrismaClient();

exports.createModel = async (data) => {
    const newModel = await prisma.models.create({
        data,
    });

    // Convert BigInt fields to string for safe serialization
    const serializedCars = JSONBigInt.stringify(newModel);
    return JSONBigInt.parse(serializedCars);    
};