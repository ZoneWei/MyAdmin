import Mock from 'mockjs';
export default {
    mockData() {
        Mock.mock('/api/userlist', {
            "code": "200",
            "data|4-10": [
                {
                "name":'@cname',
                "birth": '@date("yyyy-MM-dd")',
                "address": '@county(true)',
                "email": '@EMAIL'
            }
        ]
        });
    }
}