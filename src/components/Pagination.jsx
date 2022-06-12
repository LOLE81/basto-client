import React from 'react';

export default function Pagination({animalsPerPage, allAnimals, paged}) {
    
    const pages = [];
        
    for (let i = 1; i <= Math.ceil(allAnimals/animalsPerPage); i++) {
        pages.push(i)
    };    
      
    return(
        
        <div>
            
            {pages.length < 1 ? 
            <></> :
            <nav className="pagination">
                
                <ul className="pages">
                    {pages?.map(p =>(
                        <li className="page" key={p}>
                            <button className="pageBtn" onClick={() => paged(p)} style={{width:"30px"}}>{p}</button>
                        </li>
                    ))}
                </ul>
    
            </nav>
            }  

        </div>
    )
};