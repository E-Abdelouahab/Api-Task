import {Request, Response} from "express";
import {User, IUser} from "../models/User";

/**
 * List All Users
 */
export async function listAllUsers(req: Request, res: Response): Promise<void>
{
    // Try-catch de la récupération des utilisateurs
    try {
        // Recherche des utilisateurs
        const users: IUser[] = await User.find();
        // Retour de la liste
        res.status(200).json(users);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json({error: error});
    }
}

/**
 * Create User
 */
export async function createUser(req: Request, res: Response): Promise<void>
{
    // Création du nouvel utilisateur
    const user = new User(req.body);

    // Try-catch de la sauvegarde de l'utilisateur
    try {
        // Sauvegarde du nouvel utilisateur
        await user.save();
        // Retour de l'utilisateur
        res.status(200).json(user);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json({error: error});
    }
}

/**
 * Read User
 */
export async function readUser(req: Request, res: Response): Promise<void>
{
    // Récupération de l'identifiant utilisateur
    const userId: string = req.params.userId;

    // Try-catch de la récupération de l'utilisateur
    try {
        // Récupération de l'utilisateur
        const user = await User.findById(userId);
        // Retour de l'utilisateur
        res.status(200).json(user);
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json({error: error});
    }
}

/**
 * Update User
 */
export async function updateUser(req: Request, res: Response): Promise<void>
{
    // Récupération de l'identifiant utilisateur
    const userId: string = req.params.userId;

    // Try-catch de la modification
    try {
        // Modification de l'utilisateur
        await User.findByIdAndUpdate(userId, req.body);
        // Retour de l'utilisateur
        res.status(200).json(await User.findById(userId));
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json({error: error});
    }
}

/**
 * Delete User
 */
export async function deleteUser(req: Request, res: Response): Promise<void>
{
    // Récupération de l'identifiant utilisateur
    const userId: string = req.params.userId;

    // Try-catch de la suppression
    try {
        // Suppression de l'utilisateur
        await User.findByIdAndDelete(userId);
        // Retour
        res.status(200).json('Utilisateur supprimé');
    } catch (error) {
        // Retour de l'erreur
        console.log(error);
        res.status(500).json({error: error});
    }
}