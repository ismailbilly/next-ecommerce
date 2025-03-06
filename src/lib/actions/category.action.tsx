"use server";
import prisma from "../prisma";
import { redirect } from "next/navigation";

export async function createCategory(formData: FormData) {
  const name = formData.get("name")?.toString();
;
  if (!name) {
    return;
  }

  const newCategory = await prisma.category.create({
    data: {
      name: name,
     
   
    },
  });

  redirect("/");
}
