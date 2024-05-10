"use client"

const { z } = require("zod")

const productFromSchema = z.object({
    name: z.string().min(5, { message: "Minimum 5 character plz" }).max(10, { message: "name no longer than 50 character" }),
    price: z.number().min(10, { message: "Price must be greater than 10" }),
    description: z.string().min(10, { message: "Description required" })
})