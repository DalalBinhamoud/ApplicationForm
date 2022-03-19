export const UtilConsts = {
  storageKeyNames: () => {
    return {
      token: 'token',
      refresh_token: 'refresh_token',
      ncaAdmin: 'ROLE_NCA_ADMIN',
      ncaOfficer: 'ROLE_COMPLIANCE_OFFICER',
    }
  },
  OptionalChar: () => {
    return {
      SpecialChar: '*',
    }
  },
  Separator: () => {
    return {
      dash: '-',
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
  Levels: () => {
    return {
      level1: 1,
      level2: 2,
      level3: 3,
      level4: 4,
      level5: 5,
      level6: 6,
    }
  },
  AuthenticationAPIs: () => {
    return {
      login: `/login`,
      refresh_token: `/refresh-token`,
    }
  },
  UcpUrlLists: () => {
    return {
      LevelsConfigUrl: '/regulation/template/levels-configuration',
      GetTemplatesUrl: '/regulation/templates',
      CreateTemplateUrl: '/regulation/template',
      getTemplatesSummaryUrl: '/regulation/templates/summary',
    }
  },
  RegulationUrlLists: () => {
    return {
      Regulation: '/regulation',
      GetRegulationsUrl: '/regulations',
      AddTags: '/regulation/tag',
      GetTags: '/regulation/tags',
      GetRegulationsSummary: '/regulations/summary',
      GetRegulationStatuses: '/regulation/statuses',
      regulationEntities: '/entities',
    }
  },
  AssignmentsAPIs: () => {
    return {
      getProcedures: '/procedures',
      getProceduresWithID: '/procedure',
      getStatuses: '/assignment/statuses',
      getAssignments: '/assignments',
      assignment: '/assignment',
      activate: '/activation',
      assessment: '/assessment',
      request: '/request',
      delegate: '/delegate',
    }
  },
  PeriodAPIs: () => {
    return {
      period: '/period',
      extend: '/extend',
    }
  },
  WorkflowInputsProps: () => {
    return {
      greaterThan: 'GREATER_THAN',
      hideChildren: 'HIDE_CHILDREN',
      reference: 'REFERENCE',
      required: 'REQUIRED',
      max: 'MAX',
      start: 'START',
      end: 'END',
    }
  },
  WorkflowInputsTypes: () => {
    return {
      checkbox: 'CHECKBOX',
      number: 'NUMBER',
      radio: 'RADIO',
      multiFields: 'MULTI_FIELDS',
      radioGroup: 'RADIO_GROUP',
      select: 'SELECT',
      percentage: 'PERCENTAGE',
      date: 'DATE',
      sortableTable: 'TABLE',
      modal: 'MODAL',
    }
  },
  ProceduresPeriodIdentifiers: () => {
    return {
      startDateIdentifier: 'SELF_ASSESSMENT_PERIOD_START_DATE',
      endDateIdentifier: 'SELF_ASSESSMENT_PERIOD_END_DATE',
      versionIdentifier: 'SELF_ASSESSMENT_PERIOD_VERSIONS',
      fixedComplianceDate: 'SELF_ASSESSMENT_FIXED_FULL_COMPLIANCE_DATE',
      fixedComplianceDateInput:
        'SELF_ASSESSMENT_FIXED_FULL_COMPLIANCE_DATE_INPUT',
      maxInputComplianceDate: 'SELF_ASSESSMENT_MAX_INPUT_FULL_COMPLIANCE_DATE',
      complianceDateOpt: 'SELF_ASSESSMENT_DEFAULT_COMPLIANCE_DATE_OPTION',
      selfModalIdentifier: 'FOLLOW_UP_PRIORITY_ENTITY',
      externalModalIdentifier: 'EXTERNAL_ASSESSMENT_PRIORITY',
    }
  },
  GridArea: () => {
    return {
      sections: 24,
    }
  },
  assignmentTarget: () => {
    return {
      entity: 'ENTITY',
      asset: 'ASSET',
      searchByEntity: 'name',
      searchByAsset: 'assetName',
    }
  },
  assignmentStatus: () => {
    return {
      active: 'ACTIVE',
      inactive: 'INACTIVE',
      draft: 'DRAFT',
      tmpDisabled: 'TEMPORARILY_DISABLED',
      permanentDisabled: 'PERMANENTLY_DISABLED',
    }
  },
  inputTypes: () => {
    return {
      text: 'TEXT',
      attachment: 'ATTACHMENT',
      date: 'DATE',
    }
  },
  entityStatus: () => {
    return {
      active: 'ACTIVE',
      tmpDisabled: 'TEMPORARILY_DISABLED',
      permanentDisabled: 'PERMANENTLY_DISABLED',
    }
  },
  SurveyAPIs: () => {
    return {
      getSurveyList: 'surveys',
      getSurveyListEntity: 'surveys/entity',
      postNewSurvey: '/survey',
      getSurveyStatuses: 'survey/statuses',
      getSurveyEntityStatuses: '/survey/entity/statuses',
      Survey: '/survey/',
    }
  },
  UserAPIs: () => {
    return {
      getUsersWithSameEntity: '/users-with-same-entity',
      getAllUsers: '/users',
    }
  },

  entitiesAPIs: () => {
    return {
      getAllEntities: 'entities',
      entitiesTags: 'entity/tags',
      entitiesSectors: '/sectors',
      entitiesAsOptions: '/entities/summary',
      assetsOptions: '/assets',
      entityRegulations: `/entity/id/regulations`,
      assignedEntities: '/assign-entities',
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
  isNumbersInRange: (
    minValue: number,
    maxValue: number,
    constMinValue: number,
    constMaxValue: number,
  ) => {
    if (
      minValue >= constMinValue &&
      minValue <= constMaxValue &&
      maxValue >= constMinValue &&
      maxValue <= constMaxValue
    ) {
      return true
    } else {
      return false
    }
  },
  isNumberInRange: (value: number, min: number, max: number) => {
    // return true if in range, otherwise false
    return (value - min) * (value - max) <= 0
  },
  isInputValueEmpty: (value: any) => {
    return value === undefined || value?.trim() === ''
  },
  // isInputValueContainsENChars: (value: string) => {
  //   const pattern = RegularConstants.ARABIC_CHAR_AND_NUM
  //   let result = !pattern.test(value)
  //   return result
  // },
  // isInputValueContainsARChars: (value: string) => {
  //   const pattern = RegularConstants.ENGLISH_CHAR_AND_NUM
  //   let result = !pattern.test(value)
  //   return result
  // },
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
  handleSort: (e: any, sortSource: any) => {
    const types: any = {
      name: 'name',
      date: 'createdDate',
    }
    const sortProperty = types[e]
    let sorted = []
    if (sortProperty === 'createdDate') {
      sorted = [...sortSource].sort((a, b) => {
        return a[sortProperty].localeCompare(b[sortProperty])
      })
    } else {
      sorted = [...sortSource].sort((a, b) =>
        a[sortProperty].toLowerCase() > b[sortProperty].toLowerCase()
          ? 1
          : b[sortProperty].toLowerCase() > a[sortProperty].toLowerCase()
          ? -1
          : 0,
      )
    }
    return sorted
  },
}
