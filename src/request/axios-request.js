import axios , { AxiosRequestConfig } from 'axios'

const client = axios.create({
    withCredentials: true
});
// client.defaults.withCredentials = true // true为自动携带


export async function request(url, config) {

    const response = await client.request({ url, ...config });
    const result = response.data.data;
    // 你的业务判断逻辑
    return result
}

export default client

