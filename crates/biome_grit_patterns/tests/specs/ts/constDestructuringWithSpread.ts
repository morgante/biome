const { x, ...y } = useQuery();

const { a, b } = getData();

const { foo, ...rest } = getObject();

// Should not match - not destructuring
const data = useQuery();

// Should not match - let instead of const
let { x, ...y } = useQuery();
