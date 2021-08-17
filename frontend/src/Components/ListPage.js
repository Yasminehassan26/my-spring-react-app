import React, { useRef, useState, useEffect } from "react";
import useLoadMoreOnScroll from "react-hook-pagination";
import InfiniteScroll from 'react-infinite-scroll-component';
function ListPage() {
    const {words, loading, items} = useFetch("http://localhost:8080/list");
    const [isFetching, setIsFetching] = useState(false);
    const [items,setItems]=useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(()=>{
    const getList=async()=>{
    const res=await fetch (

    );
    const data =await res.json();
    setItems(data);
    };

    getList();
    },[])
    const fetchData=()=>{

    };
    return (
        <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        {items}
      </InfiniteScroll>
    );
  }
  
  export default ListPage;