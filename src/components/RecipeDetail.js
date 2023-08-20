import React from "react";
import image from "../assets/stew.jpg"
function RecipeDetail(){
    return <>
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex items-center h-screen">
                <img src={image} className="w-full shadow-md rounded-2xl shadow-neutral-700" />
            </div>
            <div className="px-9">
                <h2 className="text-4xl font-bold">
                    Recipe Title
                </h2>
                <p className="text-2xl w-full">
                    These cookies are chewy, chocolatey, and perfect for any occasion.
                </p>
                <h3 className="text-2xl font-bold mt-6">Ingredients</h3>
                <ul className="list-inside flex flex-col border-2 border-gray-500 rounded-md p-1">
                    <li className="p-0.5 rounded-md odd:bg-blue-100">2 1/4 cups all-purpose flour</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">1/2 teaspoon baking soda</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">1 cup unsalted butter, room temperature</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">1/2 cup granulated sugar</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">1 cup packed brown sugar</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">1 teaspoon salt</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">2 teaspoons vanilla extract</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">2 large eggs</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">2 cups chocolate chips</li>
                </ul>
                <h3 className="font-bold text-2xl mt-10">Instructions</h3>
                <ol className="list-[upper-roman] list-inside flex flex-col gap-2 border-2 border-gray-500 rounded-md p-1 ">
                    <li className="p-0.5 rounded-md odd:bg-blue-100" >Preheat oven to 375°F (190°C).</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">In a small bowl, mix the flour and baking soda. Set aside.</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">In a large bowl, beat the butter, granulated sugar, brown sugar, salt, and vanilla extract until creamy.</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">Add the eggs, one at a time, beating well after each addition.</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">Gradually add the flour mixture to the wet ingredients and mix until combined.</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">Stir in the chocolate chips.</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">Drop rounded tablespoons of dough onto ungreased baking sheets.</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">Bake for 9-11 minutes or until the edges are golden brown.</li>
                    <li className="p-0.5 rounded-md odd:bg-blue-100">Cool on the baking sheets for a few minutes before transferring to wire racks to cool completely.</li>
                </ol>
            </div>
        </div>
    </>
}
export default RecipeDetail;