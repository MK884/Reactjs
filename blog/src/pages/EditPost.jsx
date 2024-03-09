import React , { useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import dataService from '../appwrite/dataService'
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
    const [ post, setPosts ] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            dataService.getPost(slug)
            .then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost