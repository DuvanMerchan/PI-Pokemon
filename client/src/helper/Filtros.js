export const tipos = (type, array) =>{
    if (array.length) return array.filter((p) => p.type.includes(type));
    return [];
} 


export const ordered = (order, pokemons) => {
    let names = pokemons.map((p)=>p.name)
    let attack = pokemons.map((p)=>p.attack)

    let ord = []

    switch(order){
        case 'a-z':
            names = names.sort();
            names.forEach((p) => {
                pokemons.forEach((po)=>{
                    if (p===po.name) ord.push(po)
                })                
            });
            return ord
        case 'z-a':
            names = names.sort().reverse();
            names.forEach((p) => {
                pokemons.forEach((po)=>{
                    if (p===po.name) ord.push(po)
                })                
            });
            return ord
        case 'attack+':
            attack = attack.sort((a,b) =>b-a);
            attack.forEach((a) => {
                pokemons.forEach((po)=>{
                    if (a===po.attack) ord.push(po)
                })                
            });
            ord = ord.filter((e,i) => ord.indexOf(e)===i)
            return ord;
        case 'attack-':
            attack = attack.sort((a,b) =>a-b);
            attack.forEach((a) => {
                pokemons.forEach((po)=>{
                    if (a===po.attack) ord.push(po)
                })                
            });
            ord = ord.filter((e,i) => ord.indexOf(e)===i)
            return ord;
        case 'API':
            if(pokemons.length){ 
               ord = pokemons.filter(p=>p.source.includes('API'))}
            return ord;
        case 'DB':
            if(pokemons.length){ 
                ord = pokemons.filter(p=>p.source.includes('DB'))}
            return ord;
        default:
            return pokemons
    }
}