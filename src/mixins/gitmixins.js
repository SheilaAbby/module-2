
const octokit = require('@octokit/rest')()
export default {
    data() {
        return{
            octokit: octokit
        }
    },

    methods: {
        auth(user){
            this.octokit.authenticate({
                type: 'basic',
                username: process.env.GITHUB_USER,
                password: process.env.GITHUB_PASS,
              });
              console.log('success');
        },
        repos() {
            this.octokit.repos.getAll({
                type: 'public',
                owner:  process.env.GITHUB_USER
              }).then(({data, headers, status}) => {
                console.log(data.map(x => x.name))
              });
        }
    },

}