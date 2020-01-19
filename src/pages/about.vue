<template>
  <f7-page name="about">
    <f7-navbar title="About" back-link="Back"></f7-navbar>

    <f7-block-title>Usual Buttons</f7-block-title>
    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button round>Round</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Fill Buttons</f7-block-title>
    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button fill>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill round>Round</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Outline Buttons</f7-block-title>
    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button outline>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button outline>Button</f7-button>
        </f7-col>
        <f7-col>
          <f7-button outline round>Round</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Raised Buttons</f7-block-title>
    <f7-block>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button raised>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised fill>Fill</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised outline>Outline</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button raised round>Round</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised fill round>Fill</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button raised outline round>Outline</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Segmented</f7-block-title>
    <f7-block>
      <f7-segmented raised tag="p">
        <f7-button>Button</f7-button>
        <f7-button>Button</f7-button>
        <f7-button active>Active</f7-button>
      </f7-segmented>
      <f7-segmented strong tag="p">
        <f7-button>Button</f7-button>
        <f7-button>Button</f7-button>
        <f7-button active>Active</f7-button>
      </f7-segmented>
      <f7-segmented raised tag="p">
        <f7-button outline>Outline</f7-button>
        <f7-button outline>Outline</f7-button>
        <f7-button outline active>Active</f7-button>
      </f7-segmented>
      <f7-segmented raised round tag="p">
        <f7-button round>Button</f7-button>
        <f7-button round>Button</f7-button>
        <f7-button round active>Active</f7-button>
      </f7-segmented>
      <f7-segmented round tag="p">
        <f7-button round outline>Outline</f7-button>
        <f7-button round outline>Outline</f7-button>
        <f7-button round outline active>Active</f7-button>
      </f7-segmented>
    </f7-block>

    <f7-block-title>Large Buttons</f7-block-title>
    <f7-block>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large fill>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large raised>Raised</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large raised fill>Raised Fill</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Small Buttons</f7-block-title>
    <f7-block>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large small>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large small outline>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large small fill>Fill</f7-button>
        </f7-col>
      </f7-row>
      <f7-row tag="p">
        <f7-col tag="span">
          <f7-button large small round>Button</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large small outline round>Outline</f7-button>
        </f7-col>
        <f7-col tag="span">
          <f7-button large small fill round>Fill</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Color Buttons</f7-block-title>
    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button color="red">Red</f7-button>
        </f7-col>
        <f7-col>
          <f7-button color="green">Green</f7-button>
        </f7-col>
        <f7-col>
          <f7-button color="blue">Blue</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-block-title>Color Fill Buttons</f7-block-title>
    <f7-block>
      <f7-row>
        <f7-col>
          <f7-button fill color="red">Red</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill color="green">Green</f7-button>
        </f7-col>
        <f7-col>
          <f7-button fill color="blue">Blue</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
import { f7Page, f7Navbar, f7Row, f7Col, f7BlockTitle, f7Button, f7Block, f7Segmented } from "framework7-vue";
export default {
  components: { f7Page, f7Navbar, f7Row, f7Col, f7BlockTitle, f7Button, f7Block, f7Segmented },
  mounted() {
    console.log("参数query: ", this.$f7route.query);

    console.log("参数params: ", this.$f7route.params);
  },

  methods: {
    back() {
      console.log(123);
    }
  }
};
</script>
