import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-size: 1.5rem;
    }
`;

const FiltersWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Filter = styled.div`
    background-color: #ddd;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    gap: 5px;
    color: #444;
    select {
        background-color: transparent;
        border: 0;
        font-size: inherit;
        color: #444;
    }
`;

export default function CategoryPage({category, subCategories, products: originalProducts}) {

    const [products, setProducts] = useState(originalProducts);

    const [filtersValues, setFiltersValues] = useState(
        category.properties.map(p => ({name: p.name, value: 'all'}))
    );

    function handlerFilterChange( filterName, filterValue ) {
        setFiltersValues(prev => {
            return prev.map(p => ({
                name: p.name,
                value: p.name === filterName ? filterValue : p.value,
            }));
        });
    };
    
    useEffect(() => {
        const catIds = [category._id, ...(subCategories?.map(c => c._id)) || []];
        
        const params = new URLSearchParams;
        params.set('categories', catIds.join(','));
        filtersValues.forEach(f => {
            if (f.value !== 'all') {
                params.set(f.name, f.value);
            }
        });
        const url = '/api/products?' + params.toString();

        axios.get(url).then(res => {
            console.log(res.data);
        });

    }, [filtersValues]);

    return (
        <>
            <Header />
            <Center>
              <CategoryHeader>
                  <h1>{category.name}</h1>
                  <FiltersWrapper>
                  {category.properties.map(prop => (
                    <Filter key={prop.name}>
                      <span>{prop.name}:</span>
                      <select 
                        onChange={event => handlerFilterChange(prop.name, event.target.value)}
                        value={filtersValues.find(f => f.name === prop.name).value}>
                        <option value="all">All</option>
                        {prop.values.map(val => (
                          <option key={val} value={val}>{val}</option>
                        ))}
                      </select>
                    </Filter>
                  ))}
                  </FiltersWrapper>
                </CategoryHeader>
                <ProductsGrid products={products} />
            </Center>
        </>
    )
};


export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const category = await Category.findById(id);
    const subCategories = await Category.find({ parent: category._id });
    const catIds = [category._id, ...subCategories.map(c => c._id)];
    const products = await Product.find({category: catIds});

    return {
      props: {
        category: JSON.parse(JSON.stringify(category)),
        subCategories: JSON.parse(JSON.stringify(subCategories)),
        products: JSON.parse(JSON.stringify(products)),
      }
    };
  };