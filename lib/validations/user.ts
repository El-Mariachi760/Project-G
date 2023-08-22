import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, { message: 'Min 3 Characters!'}).max(30, { message: 'Max Character limit reached!'}),
    username: z.string().min(3, { message: 'Min 3 Characters!'}).max(30, { message: 'Max Character limit reached!'}),
    bio: z.string().min(3, { message: 'Min 3 Characters!'}).max(1000, { message: 'Max Character limit reached!'})
})