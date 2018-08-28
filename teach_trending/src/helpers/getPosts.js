import steem from 'steem'

const getPosts = async props => {

  return await steem.api.getDiscussionsByHotAsync({tag: props, limit: 50}).then(res => {
    return res
  }).then(res => {return res}).catch(err => {
    console.log(err)
  })

}

export default getPosts;