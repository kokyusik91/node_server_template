type ErrorType = 'BAD_REQUEST' | 'UN_AUTHORIZED' | 'FORBIDDEN' | 'NTERNAL_SERVER_ERROR' | 'NOT_FOUND'

type ErrorMetaObject = {
  title: ErrorType
  message: string
}

const ErrorCodeMap = new Map<number, ErrorMetaObject>()

ErrorCodeMap.set(400, { title: 'BAD_REQUEST', message: '잘못된 데이터를 요청 받았습니다.' })
ErrorCodeMap.set(401, { title: 'UN_AUTHORIZED', message: '인증정보가 올바르지 않습니다.' })
ErrorCodeMap.set(404, { title: 'NOT_FOUND', message: '잘못된 주소로 요청을 진행하였습니다.' })
ErrorCodeMap.set(403, { title: 'FORBIDDEN', message: '인가되지 않은 정보입니다.' })
ErrorCodeMap.set(500, { title: 'NTERNAL_SERVER_ERROR', message: '서버 오류' })

console.log(ErrorCodeMap)

function throwError(errorCode: number, errorMap: Map<number, ErrorMetaObject>) {
  // error 객체를 리턴 {}
}
