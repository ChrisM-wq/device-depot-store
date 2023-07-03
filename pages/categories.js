import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductBox from "@/components/ProductBox";
import Title from "@/components/Title";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Link from "next/link";
import styled from "styled-components";

const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const CategoryTitle = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 0;
    align-items: center;
    gap: 1em;
    a {
        color: #26282a;
        display: inline-block;
    }
    h2{
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const CategoryWrapper = styled.div`
    margin-bottom: 40px;
`;

const ShowAllSquare = styled(Link)`
    background-color: #ddd;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:  10px;
    color: #26282a;
    text-decoration: none;
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
                        <CategoryTitle>
                            <h2>{category.name}</h2>
                            <Link href={'/category/'+category._id}>Show all</Link>
                        </CategoryTitle>
                        
                        <CategoryGrid>{categoriesProducts[category._id].map(p => (
                            <ProductBox {...p} />
                        ))}
                        <ShowAllSquare href={'/category/'+category._id}>
                            Show all &rarr;
                        </ShowAllSquare>
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