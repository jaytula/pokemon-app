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
    })
    return <div className={classes.root}>
      <pre>
        {JSON.stringify(info, null, 2)}
      </pre>
    </div>
}

export default Pokemon;