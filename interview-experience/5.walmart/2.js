const outer = () => {
    let counter = 0
    const inner = () => {
        counter++
        console.log(counter);
    }
    return inner
}

const inner = outer()
inner()
inner()
inner()

// == 
// ===


// 1 == "1" // true
// 1 === "1" // false

type TodoProps={
    id:number
    title:string
    description?:string
}

const multiply = (x,y)=>x*y

<Button
  variant="primary"
  loading={isLoading}
  onPress={handlePress}
  title="Submit"
/>
