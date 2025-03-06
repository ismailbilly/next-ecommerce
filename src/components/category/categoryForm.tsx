import React from 'react'
import { createCategory } from '@/lib/actions/category.action';
import { Category } from '@prisma/client';


const CategoryForm = () => {
  return (
    <form action={createCategory}>
      <div>
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name of your category"
          required
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit">Create Category</button>
    </form>
  );
}

export default CategoryForm