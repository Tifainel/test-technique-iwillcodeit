// Definitions
interface MetaObject {
  key: string
  value: string | number
  refs: string[]
}

type KeyMap<K = string> = Record<string, K>

type MappedMetaObject<K extends string | number | symbol = string> = Record<K,  MetaObject>

export const extractMetaobjectFields = <T extends string | number | symbol>(keyMap: KeyMap<T>, metaObject: MetaObject[]) => {
  const r = metaObject.reduce((acc, thisMetaObject) => {
    if (thisMetaObject.key in keyMap) {
      const key = keyMap[thisMetaObject.key]

      acc[key] = thisMetaObject
    }

    return acc
  }, {} as MappedMetaObject<T>)

  return r
}

// Usage

// Here, fill in the KeyMap parameter first, it'll allow autocompletion on the object-

type VideoMappedKeys = 'url' | 'type'

const video = {
  keys: {
    a_a: "type",
    c_c: "url"
  } satisfies KeyMap<VideoMappedKeys>,
}

const ALL_META_DEFINITIONS = {
  video
}

const meta: MetaObject[] = [
  {
    key: 'a_a',
    value: 123,
    refs: []
  }
]

const videoMetaObject = extractMetaobjectFields(ALL_META_DEFINITIONS.video.keys, meta) // satisfies MappedMetaObject<VideoKeys>

console.log(videoMetaObject.type) // works well !
console.log(videoMetaObject.url) // works well !
