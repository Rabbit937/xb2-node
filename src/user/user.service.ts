import { connection } from '../app/database/mysql'
import { UserModel } from './user.model'


/**
 * 创建用户
 */


export const createUser = async (user: UserModel) => {
    const statement = `
        INSERT INTO user
        SET ?
    `;

    // 执行查询
    const [data] = await connection.promise().query(statement, user);

    // 提供数据
    return data;
}

/**
 * 按用户名获取用户
 */
interface GetUserOptions {
    password?: boolean;
}


export const getUserByName = async (
    name: string,
    options: GetUserOptions = {},
) => {
    const { password } = options;

    const statement = `
        SELECT 
            id,
            name
            ${password ? ', password' : ''}

        FROM user
        WHERE name =?
    `;

    // 执行查询
    const [data] = await connection.promise().query(statement, name);

    // 提供数据
    return data[0];
}