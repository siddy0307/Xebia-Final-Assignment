/* eslint linebreak-style: ["error", "windows"] */
import { connect } from 'react-redux';
import smartSheetView from './smartSheetView';
import { fetchSchema, fetchRecords } from './actions';
import { withRouter } from 'react-router';
import { updateGridAPI, lastActionColumn, delAllFlag, clearReducer } from '../../../actions/grid/gridActions';
import CustomHeader from '../fieldViews/renderers/customHeader';
import CreatedByRenderer from '../fieldViews/renderers/CreatedByRenderer';
import ProxyCreatedByRenderer from '../fieldViews/renderers/ProxyCreatedByRenderer';
import UpdatedByRenderer from '../fieldViews/renderers/UpdatedByRenderer';
import SingleLineText from '../fieldViews/wrappers/SingleLineText';
import NumberRenderer from '../fieldViews/renderers/NumberRenderer';
import ParagraphTextRenderer from '../fieldViews/renderers/ParagraphTextRenderer';
import { setSelectedFilter, updateMapping, showClearFilterButton, updateCaseSensitive } from '../../../actions/filter/filterActions';
import PeopleSearchRenderer from '../fieldViews/renderers/PeopleSearchRenderer';
import SubformRenderer from '../fieldViews/renderers/SubformRenderer';
import FileAttachmentRenderer from '../fieldViews/renderers/FileAttachmentRenderer';
import NumberEditor from '../fieldViews/editors/NumberEditor';
import ParagraphTextEditor from '../fieldViews/editors/ParagraphTextEditor';
import ActionMenuRenderer from '../fieldViews/renderers/actionMenu';
import { showNotificationWithTimeout } from '../../../actions/notification/asyncActions';
import Utils from '../filter/utils';

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.formDataReducer, 
    filterData: state.filterReducer,
    gridData:state.gridDataReducer,
    notification: state.notificationReducer,
    frameworkComponents: {
      CreatedByRenderer: CreatedByRenderer,
      ProxyCreatedByRenderer: ProxyCreatedByRenderer,
      UpdatedByRenderer: UpdatedByRenderer,
      SingleLineText: SingleLineText,
      NumberRenderer: NumberRenderer,
      ParagraphTextRenderer: ParagraphTextRenderer,
      PeopleSearchRenderer: PeopleSearchRenderer,
      SubformRenderer: SubformRenderer,
      FileAttachmentRenderer: FileAttachmentRenderer,
      NumberEditor: NumberEditor,
      ParagraphTextEditor: ParagraphTextEditor,
      agColumnHeader: CustomHeader,
      ActionMenuRenderer: ActionMenuRenderer,
    },
    components: {
      loadingRenderer: function (params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src = "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/images/loading.gif">';
        }
      },
      selectionRenderer: function (params) {       
        let selectedFlag = params.node.isSelected();
        let totalRowCount = params.node.gridApi.getDisplayedRowCount();
        let selectedRowCount = params.node.gridApi.selectionController.getSelectedNodes().length;
        if (params.value !== undefined) {
          return params.value;
        } else {
          if (selectedFlag) {
            return '<input id = "checked_boxes" className = "check-all-box" type = "checkbox" checked = "true""';
          }
          else {
            return '<input id = "unchecked-boxes" className = "checked_boxes check-all-box" type = "checkbox" unchecked = "true""';
          }

        }
      }
    },
    formField: state.formDataReducer.fields,
    delAllFlag: state.gridDataReducer.delAllFlag,
    totalRecords: state.gridDataReducer.totalRecords,
    totalRecordsFlag: state.gridDataReducer.totalRecordsFlag,
    issueInAPICall: state.gridDataReducer.issueInAPICall,
  };

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showNotificationWithTimeout: (message, type) => {
      dispatch(showNotificationWithTimeout(message, type));
    },
    //initialixze form schema
    onFetchData: (formsId) => {
      dispatch(fetchSchema(formsId));
    },
    //initialize reducer
    clearGridReducer: () => {
      dispatch(clearReducer());
    },
    showClearFilterButton: () => {
      dispatch(showClearFilterButton());
    },
    //aisgn grid api when it is ready
    onGridReady: (formsParam, params) => {   
      dispatch(updateGridAPI({
        gridAPI: params,
      }));
    },
    // this function is to get the records from GE formsforms
    onGridDataMap: (params) => {
      let payload = {
        'limit': 100,
        'fields': [],
        'parent_record_id': 0,
        'sort': params.gridData.sortedColumn,
      };
      let templateID = params.formData.default_var_view;
      params.filterData.filtersList.forEach(filterJson => {
        if (filterJson.templateId === parseInt(templateID)) {
          let allFilterFields = Utils.systemFields[params.formData.form_type].concat(params.formData.fields);
          let filter = Utils.prepareComponentJSONFromAPIJSON(filterJson, allFilterFields);
          dispatch(updateMapping(filter.maps));
          dispatch(updateCaseSensitive(filter.case_sensitive));
          dispatch(setSelectedFilter(filter.selectedFilter));
          payload.filters = Utils.prepareFilterConditionsCriteria(params.filterData.filter.maps);
          payload.case_sensitive = params.filterData.filter.case_sensitive;
        }
      })
      let formsId = params.formData.form_id;
      let dataSource = {
        rowCount: null,
        getRows: function (params) {
          payload.offset = params.startRow;
          dispatch(fetchRecords(formsId, payload, params));
        },
      };
     params.gridData.gridApi.gridCore.gridOptions.api.setDatasource(dataSource);
    },
    rowClickEventHandler: (props, params) => {
      console.log('rowClickHandler')
      if (params.colDef.fieldDef.field_id == 'checkBoxColumn') {
        params.node.setSelected(!(Boolean(params.node.isSelected())));
        let actionFlag = props.props.gridData.lastActionColumn;
        actionFlag == true ? actionFlag = false : actionFlag = true;
        dispatch(lastActionColumn({
          lastActionColumn: actionFlag,
        }));
        dispatch(delAllFlag(false));
        let refreshParam = {
          force: true,
          rowNodes: [params.node],
          coulmn: 'sn',
        }
        params.api.refreshCells(refreshParam);
      }
    }
  }
};

const MainViewClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(smartSheetView);

export default withRouter(MainViewClass);
