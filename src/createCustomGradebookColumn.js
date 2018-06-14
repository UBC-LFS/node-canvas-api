import { postRequest, canvasDomain } from './internal/post'

export function createCustomGradebookColumn (courseId, columnTitle, columnPosition) {
  return postRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns`, {
    'column[title]': columnTitle,
    'column[position]': columnPosition
  })
}
