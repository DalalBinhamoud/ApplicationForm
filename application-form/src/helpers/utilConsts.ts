export const UtilConsts = {
  storageKeyNames: () => {
    return {
      token: 'token',
      refresh_token: 'refresh_token',
    }
  },
  TruncatedText: () => {
    return {
      elementMaxDisplayedNum: 8,
      reasonMaxDisplayed: 8,
      length: 20,
      ellipsis: '...',
    }
  },
  AuthenticationAPIs: () => {
    return {
      login: `/login`,
      refresh_token: `/refresh-token`,
    }
  },
  ApplicationAPIs: () => {
    return {
      getApplications: `/applications`,
      crudApplication: `/application`,
    }
  },
  DashboardApis: () => {
    return {
      getDashboardResumes: '/dashboard/resumes',
    }
  },

  ApplicationStatus: () => {
    return {
      created: 'Created',
      completed: 'Completed',
      accepted: 'Accepted',
      rejected: 'Rejected',
    }
  },

  StatusCodes: () => {
    return {
      OK: 200,
      Created: 201,
      BadRequest: 400,
      Unauthorized: 401,
      Forbidden: 403,
      NotFound: 404,
      NoContentAccess: 204,
    }
  },
  handleResponse: (response: any) => {
    if (response.status === UtilConsts.StatusCodes().OK) {
      return response
    } else {
      return {}
    }
  },

  isInputValueEmpty: (value: any) => {
    return value === undefined || value?.trim() === ''
  },

  restrictAlphabets: (evt: any) => {
    const charCode = evt.keyCode || evt.charCode
    if (
      (charCode >= 65 && charCode <= 90) ||
      UtilConsts.specialCharCodes().includes(charCode)
    ) {
      evt.preventDefault()
    }
  },
  specialCharCodes: () => [106, 107, 109, 110, 111, 190, 188, 189],
}
