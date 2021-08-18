import React, {useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Elements from "../Components/Elements";
function ListPage() {

    const [items,setItems]=useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(2)

    useEffect(()=>{
    const getList=async()=>{
    const res=await fetch (
      `http://localhost:8080/getStudents/1`
    );
    const data =await res.json();
    setItems(data);
    };
    getList();
    },[])
  
    const fetchList=async()=>{
      const res=await fetch (
        `http://localhost:8080/getStudents/${page}`
      );
      const data =await res.json();
      return data;     
    };

    const fetchData=async()=>{
     const ListElements =await fetchList();
     setItems([...items,...ListElements])
     if (ListElements.length === 0 || ListElements.length<20 ) {
      setLoading(false);  
    }
    setPage(page+1);
    };
    return (
        <InfiniteScroll
        dataLength={items.length} 
        next={fetchData}
        hasMore={loading}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        >
          {items.map((item) => {
          
            return <Elements key={item.id} item={item} />;
          
            
          })}
                 
      </InfiniteScroll>
    );
  }
  
  export default ListPage;