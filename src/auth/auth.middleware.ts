import { createHash } from "crypto";
import { Request, Response, NextFunction } from "express";
import * as userService from '../user/user.service'


/**
 * 验证用户数据
 */

export const validateLoginData = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // 获取用户数据
    const { name, password } = request.body;

    if (!name) return next(new Error('NAME_IS_REQUIRED'))
    if (!password) return next(new Error('PASSWORD_IS_REQUIRED'))


    const user = await userService.getUserByName(name, { password: true });
    if (!user) return next(new Error('NAME_DOES_NOT_EXIST'))

    const matched = createHash('sha256').update(password).digest('hex') === user.password;
    console.log(matched)

    if (!matched) return next(new Error('PASSWORD_DOES_NOT_MATCH'));


    next();
}