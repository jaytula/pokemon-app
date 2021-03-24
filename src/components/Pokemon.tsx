import React, { useEffect, useState } from 'react';
import classes from './Pokemon.module.css'

interface Props {
    name: string;
    url: string;
}

// https://pokeres.bastionbot.org/

const Pokemon: React.FC<Props> = ({name, url}) => {
    const [info, setInfo] = useState<any>()
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setInfo(data);
        })
    }, [url])
    return <div className={classes.root}>
      {name} : <a href={url}>More Info</a>
    </div>
}

export default Pokemon;