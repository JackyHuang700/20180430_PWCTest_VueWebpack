<template>
  <div class="container">
    <div class="row">
      <div class="row">

        <div class="col-12">
          <select class="js-select2">
            <option value="AK" disabled>Alaska</option>
            <option value="HI">Hawaii</option>
            <option value="CA">California</option>
            <option value="NV">Nevada</option>
            <option value="OR" disabled>Oregon</option>
            <option value="WA">Washington</option>
            <option value="AZ">Arizona</option>
            <option value="CO">Colorado</option>
            <option value="ID">Idaho</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NM">New Mexico</option>
            <option value="ND">North Dakota</option>
            <option value="UT">Utah</option>
            <option value="WY">Wyoming</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="IL">Illinois</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="OK">Oklahoma</option>
            <option value="SD">South Dakota</option>
            <option value="TX">Texas</option>
            <option value="TN">Tennessee</option>
            <option value="WI">Wisconsin</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="IN">Indiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="OH">Ohio</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WV">West Virginia</option>
          </select>
        </div>

        <div class="col-12">
          <select class="js-select2" multiple>
            <option value="AK" disabled>Alaska</option>
            <option value="HI">Hawaii</option>
            <option value="CA">California</option>
            <option value="NV">Nevada</option>
            <option value="OR" disabled>Oregon</option>
            <option value="WA">Washington</option>
            <option value="AZ">Arizona</option>
            <option value="CO">Colorado</option>
            <option value="ID">Idaho</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NM">New Mexico</option>
            <option value="ND">North Dakota</option>
            <option value="UT">Utah</option>
            <option value="WY">Wyoming</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="IL">Illinois</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="OK">Oklahoma</option>
            <option value="SD">South Dakota</option>
            <option value="TX">Texas</option>
            <option value="TN">Tennessee</option>
            <option value="WI">Wisconsin</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="IN">Indiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="OH">Ohio</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WV">West Virginia</option>
          </select>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import 'select2/dist/js/select2.min.js'
import 'select2/dist/js/select2.full.min.js'
export default {
  name: 'select24',
  created () { },
  mounted () {
    $('.js-select2').select2({
      placeholder: 'Pick states',
      theme: 'material'
    })

    $('.select2-selection__arrow')
      .addClass('material-icons')
      .html('arrow_drop_down')
  },
  methods: {}
}
</script>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
</style>
<style lang="css">
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
<style lang="scss">
// body {
//   overflow-x: hidden;
//   overflow-y: scroll;

//   max-width: 600px;
//   margin: 2rem auto;
// }

ul {
  margin: 0;

  padding: 0;
}
</style>
<style lang="scss">
/**
 * Basic styles
 */

:focus {
  outline: none;
}

:disabled {
  background-color: transparent;
}

/**
 * Multiple Select2
 */

.select2-container--material {
  width: 100% !important;

  ::placeholder {
    color: inherit;
  }

  /**
     * Textbox
     */

  .select2-selection {
    /* @extend .form-control */
    display: block;
    /* @extend input */
    overflow: visible;

    box-sizing: inherit;

    margin: 0;

    margin-top: 0.2rem;

    margin-bottom: 1rem;

    padding: 0.5rem 0 0.6rem;

    min-height: 2.1rem;

    width: 100%;

    //height: 2.1rem;
    width: 100%;

    outline: 0;

    border: 1px solid rgba(0, 0, 0, 0.15);

    border: none;

    border-bottom: 1px solid #ccc;

    border-radius: 0;

    border-radius: 0;

    border-radius: 0;

    background-color: transparent;

    /* @extend input[type=text] */
    background-color: transparent;

    background-image: none;

    background-clip: padding-box;

    box-shadow: none;

    color: #55595c;

    font: inherit;

    font-size: 1rem;

    font-size: 1rem;

    line-height: inherit;

    line-height: 1.5;

    transition: all 0.3s;

    touch-action: manipulation;

    .select2-selection__rendered {
      padding-left: 0;
    }
  }

  .select2-selection--single {
    .select2-selection__rendered {
      float: left;
    }

    .select2-selection__arrow {
      float: right;
    }
  }

  .select2-selection--multiple {
    .select2-selection__rendered {
      width: 100%;

      li {
        list-style: none;
      }
    }

    /**
         * Multiple selected options
         */
    .select2-selection__choice {
      display: inline-block;

      display: inline-block;

      float: left;

      margin: 2px 0;

      margin-right: 8px;

      margin-bottom: 4px;

      padding: 0 12px;
      /* @extend .mdl-chip */
      height: 32px;

      border: 0;

      border-radius: 16px;

      background-color: #dedede;

      color: rgba(0, 0, 0, 0.87);

      vertical-align: middle;

      white-space: nowrap;

      font-size: 0;

      /* @extend .mdl-chip__text */
      font-size: 13px;

      //font-family: "Roboto","Helvetica","Arial",sans-serif;
      line-height: 32px;
    }

    /**
         * Multiple selected option clear button
         */
    .select2-selection__choice__remove {
      float: right;

      margin-top: 4px;

      margin-right: -6px;

      margin-left: 6px;
      /* Hide default content */
      font-size: 0;

      opacity: 0.38;

      cursor: pointer;

      transition: opacity;

      &::before {
        display: inline-block;

        color: #000;
        content: 'cancel';

        text-transform: none;

        white-space: nowrap;

        word-wrap: normal;

        letter-spacing: normal;

        font-weight: normal;

        font-style: normal;

        font-size: 24px;

        /* @extend .material-icons */
        font-family: 'Material Icons';

        line-height: 1;

        direction: ltr;

        -webkit-font-feature-settings: 'liga';

        -webkit-font-smoothing: antialiased;
      }

      &:hover {
        opacity: 0.54;
      }
    }
  }

  .select2-search--inline {
    .select2-search__field {
      margin-top: 0;
      width: 100%;

      /* Match input[type=text] */
      height: 34px;

      line-height: 1;
    }
  }

  /**
     * Dropdown
     */

  .select2-dropdown {
    border: 0;

    .select2-search__field {
      margin-bottom: 16px;
      min-height: 2.1rem;

      border: 0;

      border-bottom: 1px solid #ccc;

      transition: all 0.3s;
      &:focus {
        border-bottom: 1px solid #4285f4;

        box-shadow: 0 1px 0 0 #4585f4;
      }
    }
  }

  .select2-results__options {
    //opacity: 0;
    //position: absolute;
    z-index: 999;

    overflow-y: auto;

    margin: 0;

    //display: none;
    min-width: 100px;

    max-height: 650px;

    /* @extend .dropdown-content */
    background-color: #fff;
    /* @extend .zf-shadow-depth* */
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);

    will-change: width, height;

    /* @extend .dropdown-content inline styles */
    //position: absolute;
    //top: 0;
    //left: 0;
    //opacity: 1;
    //display: block;

    &--above {
      //top: 50px;
    }

    &--below {
      //top: -50px;
    }
  }

  /**
     * Options
     */

  .select2-results__option {
    //color: #4285F4;
    display: block;

    clear: both;

    padding: 1rem;

    color: rgba(0, 0, 0, 0.87);

    //width: 100%;
    text-align: left;

    text-transform: none;

    /* @extend .dropdown-content li>a, .dropdown-content li>span */
    font-size: 1.2rem;

    line-height: 1.5rem;
    /* @extend .dropdown-content li */
    cursor: pointer;

    /**
         * Disabled options
         */
    &[aria-disabled='true'] {
      background-color: transparent !important;
      /* @extend .select-dropdown li.disabled */
      color: rgba(0, 0, 0, 0.3);

      cursor: context-menu;

      /* @extend .disabled */
      cursor: not-allowed;
    }

    /**
         * Selected option
         */
    &[aria-selected='true'] {
      background-color: #eee;
      /* @extend .dropdown-content li:active, .dropdow-content li:hover */
      color: #4285f4;
    }

    /**
         * Active/hovered option
         */
    &--highlighted[aria-selected] {
      background-color: #ddd;
    }
  }

  /**
     * Focused textbox
     */

  &.select2-container--focus {
    .select2-selection {
      /* @extend input[type=text]:focus */
      border-bottom: 1px solid #4285f4;

      box-shadow: 0 1px 0 0 #4585f4;
    }
  }

  /**
     * Disabled textbox
     */

  &.select2-container--disabled {
    .select2-selection {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      /* @extend .select-wrapper input.select-dropdown:disabled */
      color: rgba(0, 0, 0, 0.3);

      cursor: default;

      user-select: none;
    }

    &.select2-container--focus {
      .select2-selection {
        box-shadow: none;
      }
    }
  }
}
</style>
