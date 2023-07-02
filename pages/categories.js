import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import Title from "@/components/Title";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import styled from "styled-components";

const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;



export default function Categories({ 
    mainCategories, 
    categoriesProducts,
}) {
    return (
        <>
            <Header />
            <Center>
                <Title>Categories</Title>
                {mainCategories.map((category) => (
                    <div>
                        <h2>{category.name}</h2>
                        <CategoryGrid>{categoriesProducts[category._id].map(p => (
                            <ProductBox {...p} />
                        ))}
                        </CategoryGrid>
                    </div>
                ))}
            </Center>
            
        </>
    )
}

export async function getServerSideProps() {

    const categories = await Category.find();
    const mainCategories = categories.filter(c => !c.parent);
    const categoriesProducts = {};

    for (const mainCat of mainCategories) {
        const mainCatId = mainCat._id.toString();
        const childCatIds = categories.filter(c => c?.parent?.toString() === mainCatId).map(c => c._id.toString());

        const categoriesIDs = [mainCatId, ...childCatIds];

        const products = await Product.find({category: categoriesIDs}, null, {limit: 3, sort:{'id': -1}})
        categoriesProducts[mainCatId] = products;
    }

    return {
        props: {
            mainCategories: JSON.parse(JSON.stringify(mainCategories)),
            categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts)),
        },
    };

};