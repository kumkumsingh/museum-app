// Write your JS here
const hero={
    name:'Heroman',
    heroic:true,
    inventory:[],
    health:10,
    weapon:{type:'default',
    damage:2}
    };
    function rest(hero)
    {
        
        if (hero.health===10)
        {
        window.alert('message your health is already good')
        }
        else
        {
        hero.health=10;
        }
        //UI for rest
    const inn=document.getElementById('inn')
    inn.addEventListener('click',function(event)
    {
        hero.health=10;
        
    })
    return hero 
    }
    rest(hero)

    function pickUpItem(hero1,weapon1)
    {
    hero1.inventory.push(weapon1)
    //UI for pickUpItem
    const newInventory=document.getElementById('dagger')
    newInventory.addEventListener('click',function(event){
    hero1.inventory.push({type:'dagger',
    damage:2})
    })
    
    return hero1 ,weapon1
    }
    pickUpItem(hero,hero.weapon)
    hero.inventory=[]
    function equipWeapon(testHero)
    {
        //reassigns the `weapon` property to the first element of the inventory array
        if(testHero.inventory.length!==0)
        {
        testHero.weapon=testHero.inventory[0]
        }
        
        //UIfor equip weapon
    const bag=document.getElementById('bag')
    bag.addEventListener('click',function(event)
   {
    testHero.weapon= testHero.inventory[0]

   })
   }
    equipWeapon(hero);
    //Read User input to change Hero name
    const heroName=document.getElementById('heroName')
     hero.name=heroName.innerText
     //function that writes your hero's name, health, weapontype, weapon damage to the page
     function displayStats()
     {
       
       const heroDetail=document.getElementById('heroDetail')
        heroDetail.innerHTML=hero.name+hero.health+hero.weapon.type+hero.weapon.damage
      

     }   

     displayStats()