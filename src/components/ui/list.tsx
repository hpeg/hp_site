import * as React from "react"

export type ListItem = {
  id: string | number
  title: string
  subtitle?: string
  description?: string
  tags?: string[]
}

type ListProps<T extends ListItem> = {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export function List<T extends ListItem>({ items, renderItem }: ListProps<T>) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
