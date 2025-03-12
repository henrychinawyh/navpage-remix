/**
 * @name Link卡片
 */

export interface LinkContentDataProps {
  id: string
  icon: string
  name: string
  linkDesc: string
  url: string
}

interface LinkContentProps {
  data: LinkContentDataProps[]
}

export const LinkContent = (props: LinkContentProps) => {
  const { data } = props || {}

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4 justify-center text-[#000] p-4">
      {data?.length === 0
        ? null
        : data?.map(
            ({ id, icon, name, linkDesc, url }: LinkContentDataProps) => (
              <div
                key={id}
                onClick={() => {
                  window?.open(url, "_blank")
                }}
                className="p-4 bg-[#f9f9f9] rounded-md cursor-pointer"
              >
                <div className="flex items-center">
                  <div
                    className="w-[40px] h-[40px] overflow-hidden flex justify-center items-center mr-2"
                    dangerouslySetInnerHTML={{
                      __html: icon,
                    }}
                  />
                  <p>{name}</p>
                </div>
                <p>{linkDesc}</p>
                {/* <div></div> */}
                {/* <div>{}</div> */}
              </div>
            )
          )}
    </div>
  )
}
