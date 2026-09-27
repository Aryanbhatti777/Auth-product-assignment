import jwt from 'jsonwebtoken'
import config from '../config/env.config'

const generateTokens = (id) => {

    const accessToken = jwt.sign({ id }, config.ACCESS_SECRET);
    const refreshToken = jwt.sign({ id }, config.REFRESH_SECRET);

    return {accessToken, refreshToken}
}
 
export default generateTokens;