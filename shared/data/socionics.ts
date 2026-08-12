export type ElementCode = 'ЧИ' | 'БИ' | 'ЧС' | 'БС' | 'ЧЛ' | 'БЛ' | 'ЧЭ' | 'БЭ'
export type Quadra = 'Альфа' | 'Бета' | 'Гамма' | 'Дельта'

export interface InformationElement {
  code: ElementCode
  name: string
  shortName: string
  attitude: 'экстравертный' | 'интровертный'
}

export interface SocionicType {
  code: string
  name: string
  alias: string
  quadra: Quadra
  functions: readonly [ElementCode, ElementCode, ElementCode, ElementCode]
}

export const informationElements: Record<ElementCode, InformationElement> = {
  'ЧИ': { code: 'ЧИ', name: 'чёрная интуиция', shortName: 'интуиция возможностей', attitude: 'экстравертный' },
  'БИ': { code: 'БИ', name: 'белая интуиция', shortName: 'интуиция времени', attitude: 'интровертный' },
  'ЧС': { code: 'ЧС', name: 'чёрная сенсорика', shortName: 'волевая сенсорика', attitude: 'экстравертный' },
  'БС': { code: 'БС', name: 'белая сенсорика', shortName: 'сенсорика ощущений', attitude: 'интровертный' },
  'ЧЛ': { code: 'ЧЛ', name: 'чёрная логика', shortName: 'деловая логика', attitude: 'экстравертный' },
  'БЛ': { code: 'БЛ', name: 'белая логика', shortName: 'структурная логика', attitude: 'интровертный' },
  'ЧЭ': { code: 'ЧЭ', name: 'чёрная этика', shortName: 'этика эмоций', attitude: 'экстравертный' },
  'БЭ': { code: 'БЭ', name: 'белая этика', shortName: 'этика отношений', attitude: 'интровертный' }
}

export const functionPositions = [
  { number: 1, name: 'Базовая', description: 'ведущая функция' },
  { number: 2, name: 'Творческая', description: 'гибкий инструмент' },
  { number: 3, name: 'Ролевая', description: 'социальная адаптация' },
  { number: 4, name: 'Болевая', description: 'уязвимая позиция' }
] as const

export const socionicTypes: readonly SocionicType[] = [
  { code: 'ИЛЭ', name: 'Интуитивно-логический экстраверт', alias: 'Дон Кихот', quadra: 'Альфа', functions: ['ЧИ', 'БЛ', 'ЧС', 'БЭ'] },
  { code: 'СЭИ', name: 'Сенсорно-этический интроверт', alias: 'Дюма', quadra: 'Альфа', functions: ['БС', 'ЧЭ', 'БИ', 'ЧЛ'] },
  { code: 'ЭСЭ', name: 'Этико-сенсорный экстраверт', alias: 'Гюго', quadra: 'Альфа', functions: ['ЧЭ', 'БС', 'ЧЛ', 'БИ'] },
  { code: 'ЛИИ', name: 'Логико-интуитивный интроверт', alias: 'Робеспьер', quadra: 'Альфа', functions: ['БЛ', 'ЧИ', 'БЭ', 'ЧС'] },

  { code: 'ЛСИ', name: 'Логико-сенсорный интроверт', alias: 'Максим Горький', quadra: 'Бета', functions: ['БЛ', 'ЧС', 'БЭ', 'ЧИ'] },
  { code: 'ЭИЭ', name: 'Этико-интуитивный экстраверт', alias: 'Гамлет', quadra: 'Бета', functions: ['ЧЭ', 'БИ', 'ЧЛ', 'БС'] },
  { code: 'ИЭИ', name: 'Интуитивно-этический интроверт', alias: 'Есенин', quadra: 'Бета', functions: ['БИ', 'ЧЭ', 'БС', 'ЧЛ'] },
  { code: 'СЛЭ', name: 'Сенсорно-логический экстраверт', alias: 'Жуков', quadra: 'Бета', functions: ['ЧС', 'БЛ', 'ЧИ', 'БЭ'] },

  { code: 'СЭЭ', name: 'Сенсорно-этический экстраверт', alias: 'Наполеон', quadra: 'Гамма', functions: ['ЧС', 'БЭ', 'ЧИ', 'БЛ'] },
  { code: 'ИЛИ', name: 'Интуитивно-логический интроверт', alias: 'Бальзак', quadra: 'Гамма', functions: ['БИ', 'ЧЛ', 'БС', 'ЧЭ'] },
  { code: 'ЛИЭ', name: 'Логико-интуитивный экстраверт', alias: 'Джек Лондон', quadra: 'Гамма', functions: ['ЧЛ', 'БИ', 'ЧЭ', 'БС'] },
  { code: 'ЭСИ', name: 'Этико-сенсорный интроверт', alias: 'Драйзер', quadra: 'Гамма', functions: ['БЭ', 'ЧС', 'ЧИ', 'БЛ'] },

  { code: 'ЭИИ', name: 'Этико-интуитивный интроверт', alias: 'Достоевский', quadra: 'Дельта', functions: ['БЭ', 'ЧИ', 'БЛ', 'ЧС'] },
  { code: 'ЛСЭ', name: 'Логико-сенсорный экстраверт', alias: 'Штирлиц', quadra: 'Дельта', functions: ['ЧЛ', 'БС', 'ЧЭ', 'БИ'] },
  { code: 'СЛИ', name: 'Сенсорно-логический интроверт', alias: 'Габен', quadra: 'Дельта', functions: ['БС', 'ЧЛ', 'БИ', 'ЧЭ'] },
  { code: 'ИЭЭ', name: 'Интуитивно-этический экстраверт', alias: 'Гексли', quadra: 'Дельта', functions: ['ЧИ', 'БЭ', 'ЧС', 'БЛ'] }
]

export const quadras: readonly Quadra[] = ['Альфа', 'Бета', 'Гамма', 'Дельта']
