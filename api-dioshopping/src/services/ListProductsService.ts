import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repository/ProductsRepository";

class ListProductsService{
    async execute(){
        const productRepository = getCustomRepository(ProductsRepository);

        const allProducts = await productRepository.find();

        return allProducts
    }
}

export { ListProductsService }