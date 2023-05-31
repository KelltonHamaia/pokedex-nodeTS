type region = ''|'all' | 'kanto' | 'johto' | 'hoenn' | 'sinnoh'


export const createTabObject = (gen:region) => {
    let region = {
       all: false,
       kanto: false, 
       johto: false, 
       hoenn: false, 
       sinnoh: false, 
    }
    
    if (gen !== '') {
        region[gen] = true;
    }
    
    return region;
}