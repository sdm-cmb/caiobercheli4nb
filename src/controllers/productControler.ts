import { Request, Response } from 'express';
import { ProductRepository } from '../repositores/productRepository';

const productRepository = new ProductRepository();

export const getProdcuts = async (req: Request, res: Response) => {
  try {
    const product = await productRepository.getAllProducts();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await productRepository.addUser(name, email);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
};