
export default function Error({children} : {children: React.ReactNode}) {
  return (
    <p className="my-2 text-red-600 font-bold uppercase text-sm">
        {children}
    </p>
  )
}
